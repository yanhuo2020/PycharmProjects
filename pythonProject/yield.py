def foo(num):
    print("starting...")
    while num<10:
        num=num+1
        mmmmmm= yield num
        print("mmmmm",mmmmmm)
ddd=foo(0)
print(next(ddd))
print(next(ddd))