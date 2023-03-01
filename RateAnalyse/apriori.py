import pandas as pd
from mlxtend.frequent_patterns import apriori
csv_data = pd.read_csv("C:\\烟火\\fractalsQSUSDCNH.csv")  # 读取训练数据
print(csv_data.shape)  # (189, 9)
# 利用 Apriori 找出频繁项集
freq = apriori(csv_data, min_support=0.5, use_colnames=True)
print(freq)