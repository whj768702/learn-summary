#### 提交修改

- `docker ps`查看容器ID
- `docker commit container_id file_name`提交修改
- `docker images file_name`查看镜像ID
- `docker save -o file_name image_id`保存

#### 使用镜像

- `docker load -i file_name`

- `docker run --name 容器名 --restart=always(自动重启) -itd -v 宿主机目录:镜像内挂载目录 -p 端口:端口 image_id`:把宿主机上的目录挂载到镜像里面

- Dockerfile文件

  ````shell
  FROM 3abd #image id

  RUN rm -rf /home/*

  ADD aqs-demo.tar /home

  RUN chmod +x /home/aqs-demo/start.sh

  CMD ["/home/aqs-demo/start.sh"]
  ````

- `docker build -t images_name .`:搭配Dockerfile创建一个image