import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArraysService {

  constructor() { }

  conceptArray: string[] = [
    'assets/Imágenes/Concept/01.jpeg',
    'assets/Imágenes/Concept/02.jpeg',
    'assets/Imágenes/Concept/03.jpeg',
    'assets/Imágenes/Concept/04.jpeg',
    'assets/Imágenes/Concept/05.jpeg',
    'assets/Imágenes/Concept/06.jpeg',
    'assets/Imágenes/Concept/IMG-20230618-WA0001.jpg',
    'assets/Imágenes/Concept/07.jpg',
    'assets/Imágenes/Concept/08.jpg',
    'assets/Imágenes/Concept/09.jpg',
    'assets/Imágenes/Concept/10.jpg',
    'assets/Imágenes/Concept/11.jpg',
    'assets/Imágenes/Concept/12.jpg',
    'assets/Imágenes/Concept/13.jpg',
    'assets/Imágenes/Concept/14.jpg',
    'assets/Imágenes/Concept/15.jpg',
    'assets/Imágenes/Concept/16.jpg',
    'assets/Imágenes/Concept/17.jpg',
    'assets/Imágenes/Concept/18.jpg',
    'assets/Imágenes/Concept/19.jpg',
    'assets/Imágenes/Concept/20.jpg',
    'assets/Imágenes/Concept/21.jpg',
    'assets/Imágenes/Concept/22.jpg',
    'assets/Imágenes/Concept/23.jpg',
    'assets/Imágenes/Concept/24.jpg',
    'assets/Imágenes/Concept/25.jpg',
    'assets/Imágenes/Concept/26.jpg',
    'assets/Imágenes/Concept/27.jpg',
    'assets/Imágenes/Concept/28.jpg',
    'assets/Imágenes/Concept/29.jpg',
    'assets/Imágenes/Concept/30.jpg',
    'assets/Imágenes/Concept/31.jpg',
    'assets/Imágenes/Concept/32.jpg',
    'assets/Imágenes/Concept/33.jpg']

  tattooArray: string[] = [
    'assets/Imágenes/Tattoos/01.jpeg',
    'assets/Imágenes/Tattoos/02.jpeg',
    'assets/Imágenes/Tattoos/03.jpeg',
    'assets/Imágenes/Tattoos/0003.jpeg',
    'assets/Imágenes/Tattoos/00003.jpeg',
    'assets/Imágenes/Tattoos/IMG-20230622-WA0024.jpg',
    'assets/Imágenes/Tattoos/04.jpeg',
    'assets/Imágenes/Tattoos/004.jpeg',
    'assets/Imágenes/Tattoos/0004.jpeg',
    'assets/Imágenes/Tattoos/05.jpeg',
    'assets/Imágenes/Tattoos/06.jpeg',
    'assets/Imágenes/Tattoos/07.jpeg',
    'assets/Imágenes/Tattoos/08.jpeg',
    'assets/Imágenes/Tattoos/09.jpeg',
    'assets/Imágenes/Tattoos/10.jpeg',
    'assets/Imágenes/Tattoos/11.jpeg',
    'assets/Imágenes/Tattoos/IMG-20230622-WA0023.jpg',
    'assets/Imágenes/Tattoos/12.jpeg',
    'assets/Imágenes/Tattoos/13.jpeg',
    'assets/Imágenes/Tattoos/14.jpeg',
    'assets/Imágenes/Tattoos/15.jpeg',
    'assets/Imágenes/Tattoos/16.jpeg',
    'assets/Imágenes/Tattoos/17.jpeg',
    'assets/Imágenes/Tattoos/18.jpeg',
    'assets/Imágenes/Tattoos/19.jpeg',
    'assets/Imágenes/Tattoos/20.jpeg',
    'assets/Imágenes/Tattoos/21.jpeg',
    'assets/Imágenes/Tattoos/22.jpeg',
    'assets/Imágenes/Tattoos/23.jpeg',
    'assets/Imágenes/Tattoos/24.jpeg',
    'assets/Imágenes/Tattoos/25.jpeg',
    'assets/Imágenes/Tattoos/26.jpeg',
    'assets/Imágenes/Tattoos/27.jpeg',
    'assets/Imágenes/Tattoos/28.jpeg',
    'assets/Imágenes/Tattoos/29.jpeg',
    'assets/Imágenes/Tattoos/30.jpeg',
    'assets/Imágenes/Tattoos/31.jpeg',
    'assets/Imágenes/Tattoos/32.jpeg',
    'assets/Imágenes/Tattoos/33.jpeg',
    'assets/Imágenes/Tattoos/34.jpeg',
    'assets/Imágenes/Tattoos/35.jpeg',
    'assets/Imágenes/Tattoos/36.jpeg',
    'assets/Imágenes/Tattoos/37.jpeg',
    'assets/Imágenes/Tattoos/38.jpeg',
    'assets/Imágenes/Tattoos/39.jpeg',
    'assets/Imágenes/Tattoos/40.jpeg',
    'assets/Imágenes/Tattoos/41.jpeg',
    'assets/Imágenes/Tattoos/42.jpeg',
    'assets/Imágenes/Tattoos/43.jpeg',
    'assets/Imágenes/Tattoos/44.jpeg']

  ilusArray: string[] = [
    'assets/Imágenes/Ilustración/001.jpeg',
    'assets/Imágenes/Ilustración/01.jpeg',
    'assets/Imágenes/Ilustración/04.jpg',
    'assets/Imágenes/Ilustración/05.jpg',
    'assets/Imágenes/Ilustración/02.jpg',
    'assets/Imágenes/Ilustración/03.jpeg',
    'assets/Imágenes/Ilustración/06.jpeg',
    'assets/Imágenes/Ilustración/07.jpeg',
    'assets/Imágenes/Ilustración/08.jpeg',
    'assets/Imágenes/Ilustración/09.jpeg',
    'assets/Imágenes/Ilustración/10.jpeg',
    'assets/Imágenes/Ilustración/11.jpeg',
    'assets/Imágenes/Ilustración/12.jpeg',
    'assets/Imágenes/Ilustración/13.jpeg',
    'assets/Imágenes/Ilustración/15.jpeg',
    'assets/Imágenes/Ilustración/16.jpeg',
    'assets/Imágenes/Ilustración/17.jpeg',
    'assets/Imágenes/Ilustración/18.jpeg',
    'assets/Imágenes/Ilustración/19.jpeg',
    'assets/Imágenes/Ilustración/20.jpeg',
    'assets/Imágenes/Ilustración/21.jpeg',
    'assets/Imágenes/Ilustración/22.jpeg',
    'assets/Imágenes/Ilustración/24.jpg',
    'assets/Imágenes/Ilustración/25.jpeg',
    'assets/Imágenes/Ilustración/26.jpeg',
    'assets/Imágenes/Ilustración/27.jpg',
    'assets/Imágenes/Ilustración/28.jpg',
    'assets/Imágenes/Ilustración/29.jpg',
    'assets/Imágenes/Ilustración/30.jpg',
    'assets/Imágenes/Ilustración/31.jpg',
    'assets/Imágenes/Ilustración/32.jpg',
    'assets/Imágenes/Ilustración/33.jpg',
    'assets/Imágenes/Ilustración/34.jpg',
    'assets/Imágenes/Ilustración/35.jpg',
    'assets/Imágenes/Ilustración/36.jpg',
    'assets/Imágenes/Ilustración/37.jpg',
    'assets/Imágenes/Ilustración/38.jpg',
    'assets/Imágenes/Ilustración/39.jpg',
    'assets/Imágenes/Ilustración/40.jpg',
    'assets/Imágenes/Ilustración/41.jpg']

  productsArray: any[] = [
    { nombre: 'GRL PWR DOG', img: 'assets/Imágenes/Tienda/02.jpg', precio: 333 },
    { nombre: 'GRL PWR DOG', img: 'assets/Imágenes/Tienda/01.jpg', precio: 333 },
    { nombre: 'GRL PWR DOG', img: 'assets/Imágenes/Tienda/04.jpg', precio: 333 },
    { nombre: 'GRL PWR DOG', img: 'assets/Imágenes/Tienda/03.jpg', precio: 333 },
    { nombre: 'AMOR', img: 'assets/Imágenes/Tienda/05.jpg', precio: 25 },
    { nombre: 'AMOR', img: 'assets/Imágenes/Tienda/06.jpg', precio: 25 },
    { nombre: 'GATO', img: 'assets/Imágenes/Tienda/07.jpg', precio: 25 },
    { nombre: 'GATO', img: 'assets/Imágenes/Tienda/08.jpg', precio: 25 },
    { nombre: 'AZUL', img: 'assets/Imágenes/Tienda/09.jpg', precio: 25 },
    { nombre: 'AZUL', img: 'assets/Imágenes/Tienda/10.jpg', precio: 25 },
    { nombre: 'AMARILLA', img: 'assets/Imágenes/Tienda/11.jpg', precio: 25 },
    { nombre: 'AMARILLA', img: 'assets/Imágenes/Tienda/12.jpg', precio: 25 },
    { nombre: 'VIOLETA', img: 'assets/Imágenes/Tienda/13.jpg', precio: 25 },
    { nombre: 'VIOLETA', img: 'assets/Imágenes/Tienda/14.jpg', precio: 25 },
    { nombre: 'NEGRA', img: 'assets/Imágenes/Tienda/15.jpg', precio: 25 },
    { nombre: 'NEGRA', img: 'assets/Imágenes/Tienda/16.jpg', precio: 25 }
  ]

}
