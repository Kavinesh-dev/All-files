import random
import pyautogui as pg
import time

animal = ('Hacker Alert ','Hacker Alert','Hacker Alert')
time.sleep(10)

for i in range(50):
    a = random.choice(animal)
    pg.write("itachi"+a)
    pg.press('enter')