class Animal:
    def __init__(self, nome, dono):
        self.nome = nome
        self.dono = dono

    def comer (self):
        print('nham nham')

class Gato(Animal):
    def __init__(self, nome, dono, raca):
        Animal.__init__(nome, dono)

    def miar(self)
        print('MiAuuuu')

class Cachorro(Animal):
    def latir(self):
        print('Au auuuuuu')

gato = 