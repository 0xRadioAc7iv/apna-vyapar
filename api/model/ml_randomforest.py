import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import sys

np.random.seed(42)
number_of_data_available = 10000
data = {
    "Environmental Score": np.random.randint(50, 100, number_of_data_available),
    "Social Score": np.random.randint(50, 100, number_of_data_available),
    "Governance Score": np.random.randint(50, 100, number_of_data_available),
    "Industry": np.random.choice(
        [
            "Accommodation and Hospitality",
            "Automotive",
            "Beauty and Wellness",
            "Business Services",
            "Education",
            "Entertainment and Dining",
            "Healthcare",
            "Home and Garden",
            "Real Estate",
            "Retail",
            "Sports and Recreation",
            "Technology",
            "Travel and Transportation",
            "Finance",
            "Food and Beverage",
            "Pets",
            "Community Services",
            "Miscellaneous Services",
        ],
        number_of_data_available,
    ),
    "Size": np.random.choice(["Small", "Medium", "Large"], number_of_data_available),
    "Sustainability Score": np.random.randint(60, 100, number_of_data_available),
}


def calculate_sustainability(env_score, soc_score, gov_score, industry, size):
    data["Environmental Score"] = np.append(data["Environmental Score"], env_score)
    data["Social Score"] = np.append(data["Social Score"], soc_score)
    data["Governance Score"] = np.append(data["Governance Score"], gov_score)
    data["Industry"] = np.append(data["Industry"], industry)
    data["Size"] = np.append(data["Size"], size)
    data["Sustainability Score"] = np.append(data["Sustainability Score"], 0)

    df = pd.DataFrame(data)
    x = df[
        ["Environmental Score", "Social Score", "Governance Score", "Industry", "Size"]
    ]
    y = df["Sustainability Score"]
    new_df = pd.get_dummies(df, drop_first=True)
    new_df1 = pd.DataFrame(new_df)
    train = new_df1[0:1000]
    test = new_df.iloc[[1000]]

    classifier = RandomForestClassifier(n_estimators=10, criterion="entropy")
    classifier.fit(
        train.drop("Sustainability Score", axis=1), train["Sustainability Score"]
    )

    predictions = classifier.predict(test.drop("Sustainability Score", axis=1))
    return predictions[0]


print(
    calculate_sustainability(
        sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5]
    )
)
