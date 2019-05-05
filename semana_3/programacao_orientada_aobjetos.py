class BoloLaranja:
    sabor = 'laranja'

    def __init__(instancia, sabor, ovos, andares):
        instancia.qtde_ovos = ovos
        instancia.qtde_andares = andares

    def assar (instancia):
        print('O bolo está assando!')

    def servir (instancia):
        print('O bolo está servido!')

x = BoloLaranja(4, 1)
y = BoloLaranja(10,3)

x.servir()
y.servir()

# bolo_chocolate = Bolo('Chocolate', 4, 1)
# print(bolo_chocolate.sabor)

# bolo_laranja = Bolo("Laranja", 2, 4)
# print(bolo_laranja.qtde_andares)

