# Guia para principiantes de Node.js - OpenShift.



1. Instalar `nodejs` y el administrador de paquetes `npm` con el cual descargaremos librerias. *Koding ya trae instalado node.js y npm*.
    ```
	$ sudo apt-get install nodejs
	$ sudo apt-get install npm
	```
2. Para el segundo reto es necesario instalar la libreria `gm`.
    ```
	$ npm install gm
    ```
## Retos

### Reto uno: Librerias estandar
Usando las librerias estandar de node `http` y `fs`, leer un archivo csv y crear un servidor http que retorne el contenido del archivo como JSON.

### Reto dos: Librerias externas OpenShift
Usando la libreria estandar `http` y la libreria externa `gm`, crear un servidor http que reciba la url de una imagen como parametro y retorne una miniatura de 100x100 pixeles. Para este reto es necesario instalar la libreria `gm`.

### Reto tres: Subir aplicación a OpenShift
Para subir la aplicación a OpenShift es necesario crear una cuenta en https://www.openshift.com/, luego vamos a crear una nueva aplicación de nodejs.
Subimos el codigo y ejecutamos.

##Información adicional
###Autenticación Openshift
Para desplegar la aplicación y modificarla necesitaremos una llave ssh, con la cual nos autenticaremos en los servidores Openshift. Vamos a generarla:
```
# vamos al directorio donde quedaran guardadas las llaves
$ cd ~/.ssh
# Listamos las llaves creadas, puede usar una existenteo generar una nueva.
$ ls
# generamos las llaves en un archivo llamado koding
$ ssh-keygen -f koding
Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in test.
Your public key has been saved in test.pub.
The key fingerprint is:
fe:6b:28:4b:69:12:0a:0e:e7:d6:52:e0:e0:46:d1:90 eosryuk@eosryuk
The key's randomart image is:
+--[ RSA 2048]----+
| o+              |
| E..             |
|...              |
|oo .             |
|ooo o   S        |
|++ + . o         |
| .= o + ..       |
| . . +. ...      |
|      .o .o.     |
+-----------------+

```

Ya tenemos las llaves generadas, ahora vamos a subir la publica a Openshift.

1. Entramos a https://openshift.redhat.com/app/console/keys/new
2. Le damos un nombre a la llave y pegamos el contenido del archivo `koding.pub`
3. Finalmente agregamos la llave a ssh-agent para poder usarla con git.


```
# start the ssh-agent in the background
$ eval $(ssh-agent -s)
Agent pid 59566
# Add your SSH key to the ssh-agent:
$ ssh-add ~/.ssh/koding
```
*Nota: Hay varias formas de configurar la llave ssh, esta no es la recomendada por Openshift pero por el tiempo disponible es la que escogi. Mas info en https://docs.openshift.com/online/user_guide/ssh_keys.html*

*Nota: El primer reto fue adaptado de https://github.com/kwhinnery/node-workshop*