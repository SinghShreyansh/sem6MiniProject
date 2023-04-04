from __future__ import print_function
import json
from flask_cors import CORS
from fpdf import FPDF
from flask import Flask, request, render_template, Markup
import numpy as np
import pickle
import pandas as pd
# from disease import disease_dic
from fertilizer import fertilizer_dic
import requests
import io

import os
import openai
import datetime


app = Flask(__name__)
CORS(app)

openai.api_key = "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"





def FertilizerPredictor(to_predict_list):
    to_predict = np.array([to_predict_list])
    loaded_model = pickle.load(open("models/classifier.pkl", "rb"))
    result = loaded_model.predict(to_predict)
    return result[0]



# routing
@app.route("/", methods=["GET"])
def home():
    return "server started..."


@app.route("/fertilizer-predict", methods=["POST"])
def result2():
    if request.method == "POST":
        print(request.json)
        to_predict_list = request.json
        location = request.json["location"]
        del to_predict_list["location"]
        to_predict_list = list(to_predict_list.values())

        # Use the OpenWeatherMap API to get the weather forecast for the next 15 days
        api_key = "25a7391eb816518d0639ab3f83a31f42"
        url = f"http://api.openweathermap.org/data/2.5/forecast?q={location}&cnt=15&appid={api_key}"
        response = requests.get(url)
        weather_data = response.json()

        print((float(weather_data["list"][0]["main"]["temp"]) - 273.15))
        Temp = float(weather_data["list"][0]["main"]["temp"]) - 273.15
        Hum = weather_data["list"][0]["main"]["humidity"]
        to_predict_list.append(Temp)
        to_predict_list.append(Hum)
        print(to_predict_list)

        to_predict_list = list(map(int, to_predict_list))

        ans = FertilizerPredictor(to_predict_list)
        print(ans)

        fertilizer_info = {"name": "", "img": ""}
        if ans == 0:
            # response = openai.Image.create(
            #     prompt="10-26-26 fertilizer",
            #     n=1,
            #     size="256x256",
            # )
            return {
                "name": "10-26-26",
                "img": "https://5.imimg.com/data5/SELLER/Default/2021/7/MJ/XK/PK/6064364/npk-10-26-26-fertilizer-500x500.jpg",
                "how_to_use": "To use 10-26-26 fertilizer, you will need to mix it with water according to the instructions on the package. The package will have a recommended mixing ratio, such as 1 tablespoon per gallon of water. For example, if you want to make a gallon of solution and package says to use 1 tablespoon per gallon, you would need to use 1 tablespoon of 10-26-26 fertilizer and 1 gallon of water. Then you can use the solution to water your plants or apply it to the foliage. It's important to note that different plants have different needs, and the amount of fertilizer you use should be adjusted accordingly. Also, be sure to not over-fertilize, as it can burn the plants. It's also a good idea to check the pH level of your soil and adjust it if necessary. As a general rule, most plants prefer a pH between 6 and 7.",
            }
        elif ans == 1:
            # response = openai.Image.create(
            #     prompt="14-35-14 fertilizer",
            #     n=1,
            #     size="256x256",
            # )
            return {
                "name": "14-35-14",
                "img": "https://5.imimg.com/data5/SELLER/Default/2022/9/OU/CO/QP/98659487/new-product-500x500.jpeg",
                "how_to_use": "14-35-14 is a type of water-soluble fertilizer that contains 14% nitrogen, 35% phosphorous, and 14% potassium. To use it, you will need to mix it with water according to the instructions on the label. The package will have a recommended mixing ratio, such as 1 tablespoon per gallon of water. For example, if you want to make a gallon of solution and package says to use 1 tablespoon per gallon, you would need to use 1 tablespoon of 14-35-14 fertilizer and 1 gallon of water. Then you can use the solution to water your plants or apply it to the foliage. It's important to note that different plants have different needs, and the amount of fertilizer you use should be adjusted accordingly. Also, be sure to not over-fertilize, as it can burn the plants. It's also a good idea to check the pH level of your soil and adjust it if necessary. As a general rule, most plants prefer a pH between 6 and 7. Be sure to follow the instructions on the label and use caution when handling any fertilizer, as they can be harmful if not used properly.",
            }
        elif ans == 2:
            # response = openai.Image.create(
            #     prompt="17-17-17 fertilizer",
            #     n=1,
            #     size="256x256",
            # )
            return {
                "name": "17-17-17",
                "img": "https://img3.exportersindia.com/product_images/bc-full/dir_67/1989738/npk-17-17-17-fertilizer-1453628.jpg",
                "how_to_use": "7-17-17 fertilizer is a water-soluble fertilizer that contains 7% nitrogen, 17% phosphorous, and 17% potassium. To use it, you will need to mix it with water according to the instructions on the label. The package will have a recommended mixing ratio, such as 1 tablespoon per gallon of water. For example, if you want to make a gallon of solution and package says to use 1 tablespoon per gallon, you would need to use 1 tablespoon of 7-17-17 fertilizer and 1 gallon of water. Then you can use the solution to water your plants or apply it to the foliage. It's important to note that different plants have different needs, and the amount of fertilizer you use should be adjusted accordingly. Also, be sure to not over-fertilize, as it can burn the plants. It's also a good idea to check the pH level of your soil and adjust it if necessary. As a general rule, most plants prefer a pH between 6 and 7. Be sure to follow the instructions on the label and use caution when handling any fertilizer, as they can be harmful if not used properly. It's important to keep in mind that 7-17-17 ratio is lower in nitrogen than other ratio, that's why it's a good idea to use this fertilizer when the plant is in the blooming or fruiting stage and not in the vegetative stage.",
            }
        elif ans == 3:
            # response = openai.Image.create(
            #     prompt="20-20 fertilizer",
            #     n=1,
            #     size="256x256",
            # )
            return {
                "name": "20-20",
                "img": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81FBYmEfLFL._SL1500_.jpg",
                "how_to_use": "20-20 fertilizer is a water-soluble fertilizer that contains equal amounts of Nitrogen (N) and Potassium (K) which is 20% each. It's important to note that this fertilizer does not contain any Phosphorus (P). To use it, you will need to mix it with water according to the instructions on the label. The package will have a recommended mixing ratio, such as 1 tablespoon per gallon of water. For example, if you want to make a gallon of solution and package says to use 1 tablespoon per gallon, you would need to use 1 tablespoon of 20-20 fertilizer and 1 gallon of water. Then you can use the solution to water your plants or apply it to the foliage. It's important to note that different plants have different needs, and the amount of fertilizer you use should be adjusted accordingly. Also, be sure to not over-fertilize, as it can burn the plants. It's also a good idea to check the pH level of your soil and adjust it if necessary. As a general rule, most plants prefer a pH between 6 and 7. Be sure to follow the instructions on the label and use caution when handling any fertilizer, as they can be harmful if not used properly. It's important to keep in mind that 20-20 ratio is higher in Potassium (K) than Nitrogen(N), that's why it's a good idea to use this fertilizer when the plant is in the blooming or fruiting stage and not in the vegetative stage.",
            }
        elif ans == 4:
            # response = openai.Image.create(
            #     prompt="28-28 fertilizer",
            #     n=1,
            #     size="256x256",
            # )
            return {
                "name": "28-28",
                "img": "https://5.imimg.com/data5/SELLER/Default/2020/8/OJ/KA/FE/46363873/28-28-00-500x500.png",
                "how_to_use": "28-28 fertilizer is a water-soluble fertilizer that contains equal amounts of Nitrogen (N) and Potassium (K) which is 28% each. It's important to note that this fertilizer does not contain any Phosphorus (P). To use it, you will need to mix it with water according to the instructions on the label. The package will have a recommended mixing ratio, such as 1 tablespoon per gallon of water. For example, if you want to make a gallon of solution and package says to use 1 tablespoon per gallon, you would need to use 1 tablespoon of 28-28 fertilizer and 1 gallon of water. Then you can use the solution to water your plants or apply it to the foliage. It's important to note that different plants have different needs, and the amount of fertilizer you use should be adjusted accordingly. Also, be sure to not over-fertilize, as it can burn the plants. It's also a good idea to check the pH level of your soil and adjust it if necessary. As a general rule, most plants prefer a pH between 6 and 7. Be sure to follow the instructions on the label and use caution when handling any fertilizer, as they can be harmful if not used improperly. It's important to keep in mind that 28-28 ratio is higher in Nitrogen (N) and Potassium (K) than other ratios, that's why it's a good idea to use this fertilizer when the plant is in the vegetative stage and not in the blooming or fruiting stage. It's also important to note that this fertilizer does not contain Phosphorus (P), which is important for root growth and seed production, so you may need to supplement with additional fertilizer that contains P.",
            }
        elif ans == 5:
            # response = openai.Image.create(
            #     prompt="DAP fertilizer",
            #     n=1,
            #     size="256x256",
            # )
            return {
                "name": "DAP",
                "img": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71BV0ee9cWL._SL1500_.jpg",
                "how_to_use": "DAP (diammonium phosphate) fertilizer is a water-soluble fertilizer that contains 18% Nitrogen (N) and 46% Phosphorus (P) . To use it, you will need to mix it with water according to the instructions on the label. The package will have a recommended mixing ratio, such as 1 tablespoon per gallon of water. For example, if you want to make a gallon of solution and package says to use 1 tablespoon per gallon, you would need to use 1 tablespoon of DAP fertilizer and 1 gallon of water. Then you can use the solution to water your plants or apply it to the foliage. It's important to note that different plants have different needs, and the amount of fertilizer you use should be adjusted accordingly. Also, be sure to not over-fertilize, as it can burn the plants. It's also a good idea to check the pH level of your soil and adjust it if necessary. As a general rule, most plants prefer a pH between 6 and 7. Be sure to follow the instructions on the label and use caution when handling any fertilizer, as they can be harmful if not used improperly. It's important to keep in mind that DAP is high in Phosphorus (P) than Nitrogen(N), that's why it's a good idea to use this fertilizer when the plant is in the blooming or fruiting stage and not in the vegetative stage.",
            }
        else:
            # response = openai.Image.create(
            #     prompt="Urea fertilizer",
            #     n=1,
            #     size="256x256",
            #     response_format="url"
            # )
            return {
                "name": "Urea",
                "img": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61BVMXL2MML._SX466_.jpg",
                "how_to_use": "Urea is a type of nitrogen fertilizer that is commonly used in agriculture. It is typically applied in granular form, although it can also be found in liquid or pellet form. To use urea fertilizer, you will need to spread it evenly over the soil and then till or rake it into the top few inches of soil. The recommended application rate will vary depending on the type of crop you are growing and the stage of growth it is in, so it's important to consult the instructions on the package or consult with your local agricultural extension agent. It's recommended to apply Urea fertilizer when the soil is moist and the weather is mild, in order to avoid loss of nitrogen due to volatilization. It's also important to note that Urea fertilizer should not be applied to dry soil or to the foliage of plants, as this can cause damage. It's also a good idea to check the pH level of your soil and adjust it if necessary. As a general rule, most plants prefer a pH between 6 and 7. Be sure to follow the instructions on the label and use caution when handling any fertilizer, as they can be harmful if not used properly.",
            }


@app.route("/weather-predict", methods=["POST"])
def result3():
    if request.method == "POST":
        # print(request.json)
        # to_predict_list = request.json
        # to_predict_list = list(to_predict_list.values())
        to_predict_list = list(to_predict_list.values())
        weather = WeatherPredictor(to_predict_list)
        result = {"data": weather}
        return result



@app.route("/forecast", methods=["POST"])
def forecast():
    # Get the user's location from the form
    location = request.json["location"]

    # Use the OpenWeatherMap API to get the weather forecast for the next 15 days
    api_key = "25a7391eb816518d0639ab3f83a31f42"
    url = f"http://api.openweathermap.org/data/2.5/forecast?q={location}&cnt=15&appid={api_key}"
    response = requests.get(url)
    weather_data = response.json()

    # Extract the necessary information from the API response
    forecast = []
    for item in weather_data["list"]:
        forecast.append(
            {
                "date": item["dt_txt"],
                "temperature": item["main"]["temp"],
                "humidity": item["main"]["humidity"],
                "wind": item["wind"]["speed"],
            }
        )

    month = datetime.datetime.now().month
    hemisphere = "north"

    # Determine the season based on the month and hemisphere
    if (month >= 3 and month <= 6) and hemisphere == "north":
        climate = "summer"
    elif (month >= 7 and month <= 10) and hemisphere == "north":
        climate = "rainy"
    elif (
        month == 11 or month == 12 or month == 1 or month == 2
    ) and hemisphere == "north":
        climate = "winter"

    temperature = forecast[0]["temperature"]
    # openai.api_key = "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"
    # instructions = openai.Completion.create(
    #     model="text-davinci-003",
    #     prompt=f"aggricultural conditions based on {temperature} kelvin and {climate} climate",
    #     max_tokens=1000,
    #     temperature=0,
    # )
    # analysis = instructions.choices[0].text
    forecast = json.dumps(forecast)
    # Return the forecast to the user
    return [forecast, ""]


if __name__ == "__main__":
    app.run()
