Tarea 2:
![alt text](image-9.png)
Se agregó el stock y categoría al Entity (Product), así como a updateWith junto a su interfaz.

![alt text](image-8.png)
Se agregaron los Validators de stock y category al Dto.

![alt text](image-5.png)
Se hace la creación mediante POST de un producto con los nuevos campos: stock y category

![alt text](image-6.png)
Se hace la actualización de los campos stock y category del producto mediante Patch 

![alt text](image-7.png)
Se intenta realizar un Post con un price negativo, entonces responde BadRequest 400: "price must be a positive number"

