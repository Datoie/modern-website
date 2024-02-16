from turtle import *

speed(30)

width(7)

color("red")
forward(250)
right(-90)
forward(250)
right(-90)
forward(250)
right(-90)
forward(250)
right(-90)

# door
forward(80)
color("blue")
begin_fill()

right(-90)
forward(120)
right(90)
forward(100)
right(90)
forward(120)

end_fill()

# roof
penup()
goto(250, 250)
pendown()
begin_fill()

right(150)
forward(150)
right(-60)
forward(100)
right(-60)
forward(150)

end_fill()

# window 1
penup()
goto(50, 200)
pendown()
color("green")
begin_fill()
right(-120)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
end_fill()

# window 2
penup()
goto(200, 150)
pendown()
color("green")
begin_fill()
right(-90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
end_fill()
exitonclick()