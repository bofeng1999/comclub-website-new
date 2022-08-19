import csv, json
import pandas as pd

PATH = "assets/ifg_sched_2.csv"

# 0     1     2    3     4      5       6         7
# Week, Date, Day, Time, Sport, Gender, Category, Venue
data = pd.read_csv(PATH).values.tolist()
print (data)

collection = {
    'data': []
}

for rec in data:
    name = rec[4].strip()
    gender = rec[5].strip()

    all_tags = []
    if gender == "M": # M, W, U, B
        all_tags.append("men's")
    elif gender == "W":
        all_tags.append("women's")
    elif gender == "U":
        all_tags.append("men's")
        all_tags.append("women's")

    # all_tags.append(str(rec[6]))

    all_tags.append(str(rec[0]).strip())

    collection['data'].append({
        "title": name,
        "tags": all_tags,
        "time": rec[3],
        "date": rec[2].title() + ", " + rec[1].replace("/", "-"),
        "venue": rec[7]
    })

with open('ifg_json.json', "a") as f:
    json.dump(collection, f)