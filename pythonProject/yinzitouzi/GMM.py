import pandas as pd
import numpy as np

headlist = ['a', 'b','c','d','e']
datalist = [[0,-1,3, 3,-3],
            [-2,2,2,-3,-3],
            [0,5,-1,1,-2],
            [3,-2,1,2,4]]
df = pd.DataFrame(data=datalist, columns=headlist)

datalist = [[20,20,20,20,20],
            [20,20,20,20,20],
            [20,20,20,20,20],
            [20,20,20,20,20]]
df1 = pd.DataFrame(data=datalist, columns=headlist)

# 除
df1 = df.div(df1, fill_value=1)

#求方差1
arr_var1 = np.var(df1.values)
print(arr_var1)
#求方差2
arr_var2 = np.var([0.4,-0.8,0.6,1.6])**0.5
print(arr_var2)
#求方差
arr_var = np.var(df.values)**0.5
print(arr_var/5)