import pandas as pd

headlist = ['a', 'b']
datalist = [[1, 2], [0, 3], [3, 2]]
df = pd.DataFrame(data=datalist, columns=headlist)

datalist = [[1, 3], [2, 1]]
df1 = pd.DataFrame(data=datalist, columns=headlist)

# 加

print('df',df)
print('add1',df.add(df1))
# nan用0填充
print('add2',df.add(df1, fill_value=0))
# 减
print('sub',df.sub(df1))
# 乘
print('mul',df.mul(df1))
# 除
print('div',df.div(df1, fill_value=1))