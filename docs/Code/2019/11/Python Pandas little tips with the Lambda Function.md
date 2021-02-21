---
title: Python Pandas little tips with the Lambda Function
date: 2019-11-13
sidebar: 'auto'
tags:
 - Python
categories:
 - Code
publish: True
meta:
  - property: og:description
    content: Pandas is a useful tool for data science because we can use this tool to analyze...
  - property: og:image
    content: https://i.imgur.com/Vf7zQPb.png
---

![](https://i.imgur.com/Vf7zQPb.png)

## Pandas
Pandas is a useful tool for data science because we can use this tool to analyze, visualize & manipulate data stored within data sets, or in coding terms, within data frames. 
## Python Lambda 
- A lambda function is a small anonymous function. 
- A lambda function can take any number of arguments, but can only have one expression.
- Here's a little tips that we can using lambda to do some easy data process on dataframe: 
``` python
x = [176, 166, 156, 186] 
df = pd.DataFrame({'height' : x}) 
df['inch'] = df['height'].apply(lambda x: x/2.54) 
df 
``` 
## Reference 
- [https://www.w3schools.com/python/python_lambda.asp](https://www.w3schools.com/python/python_lambda.asp)