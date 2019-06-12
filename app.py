import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///db/opportunity_zones.sqlite")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Save table reference to a variable
api_data = Base.classes.api

# Create the session link
session = Session(engine)



#################################################
# Routes
#################################################

# Home Route
@app.route("/")
def index():
    return render_template("index.html")

# API Route
@app.route("/api/v1.0")
def zones():
    
    # Query all the API table
    results = session.query(api_data.tract, api_data.community_name, api_data.pop_12_17, api_data.pop_change, api_data.median_income, api_data.home_value, api_data.home_change, api_data.assoc_degree_or_higher, api_data.unemployment, api_data.poverty_rate, api_data.crimes_per_1000).all()

    # Create a dictionary from the row data and append to a list of zone_data
    zone_data = []
    for tract, name, pop, popChange, income, homeValue, homeChange, education, unemploy, poverty, crime in results:
        zone_dict = {}
        zone_dict["census_tract"] = tract
        zone_dict["community_name"] = name
        zone_dict["population"] = pop
        zone_dict["pop_change_since2010"] = popChange
        zone_dict["median_income"] = income
        zone_dict["median_home_value"] = homeValue
        zone_dict["home_value_change_since2010"] = homeChange
        zone_dict["assoc_degree_or_higher"] = education
        zone_dict["unemployment"] = unemploy
        zone_dict["poverty"] = poverty
        zone_dict["crimes_per_1000"] = crime
        zone_data.append(zone_dict)

    return jsonify(zone_data)



if __name__ == "__main__":
    app.run()
