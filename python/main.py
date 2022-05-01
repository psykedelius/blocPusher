#!/usr/bin/env python3
from datetime import date
today = date.today()
today.strftime("%A %d. %B %Y")

addNew = True
print(today.strftime("%A %d. %B %Y"))
def createProduct ():
    name = str(input('Indiquez le nom du produit: '))
    price = float(input('Indiquez son prix: '))
    return name,price

def calculatePrice(price):
  priceWithTaxes = price * 1.2
  return priceWithTaxes

while addNew is True:
  
  name,price = createProduct ()
  priceTTC = calculatePrice(price)
  message = "Produit %s créé au prix de %s € HT soit %s € TTC" % (name, price,priceTTC)
  print(message)


  response = int(input('Souhaitez-vous ajouter un nouveau produit ? '))
  
  if 1 == response:
    addNew = True
  else:
    addNew = False
  