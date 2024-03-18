---
id: md-install
title: Установка и настройка MultiDirectory
sidebar_label: Установка MultiDirectory
discription: Установка и настройка MultiDirectory + видео
---
## Общая информация

В статье описывается установка и первоначальная настройка WEB-интерфейса LDAP-каталога MultiDirectory.

## Требования для установки каталога

1. Компонент устанавливается на Linux-сервер, протестирован на Ubuntu, Debian.
2. Минимальные требования для сервера: 1 CPU, 1 GB RAM, 8 GB HDD.
3. Необходимо зарегистрировать домен и сопоставить его с IP вашего сервера.

:::info Важно
Необходим статический IP-адрес.
Пример: ваш_домен.ru -> 255.255.255.255.
:::

4. Для работы MultiDirectory необходимо произвести установку [Docker](https://docs.docker.com/engine/install/ "https://docs.docker.com/engine/install/") и [Docker-Compose](https://docs.docker.com/compose/install/ "https://docs.docker.com/compose/install/")

## MultiDirectory используют следующие репозитории:

1. [MultiDirectory](https://github.com/MultifactorLab/MultiDirectory "https://github.com/MultifactorLab/MultiDirectory") - сервер веб-API LDAP и JSON.
2. [MultiDirectory Web Admin](https://github.com/MultifactorLab/MultiDirectory-Web-Admin "https://github.com/MultifactorLab/MultiDirectory-Web-Admin") - веб-интерфейс для API.

:::note
Все сервисы работают при помощи Traefik, используя Postgres в качестве базы данных. Другие СУБД несовместимы.
:::

## Работа с паролями для учетных записей

С MultiDirectory работают два вида второго фактора:

* Push - уведомления
* OTP-токен

### Когда срабатывает Push и OTP

#### Push - уведомление

Срабатывает в том случае, если:

* в конце пароля отсутствуют цифры;
* последним символом пароля является буква или спецсимвол;
* в конце пароля имеются цифры, но их количество меньше 6.

#### OTP - токен

Срабатывает в том случае если:

* в пароле для учетной записи последние 6 или более символов - цифры (в случае если в конце пароля стоит более 6 цифр - в OTP будут браться последние шесть).

## Установка MultiDirectory

1. Загрузите и распакуйте последнюю версию репозитория:

```shell
curl -L https://github.com/MultifactorLab/MultiDirectory-CI/archive/refs/heads/main.zip -o md.zip
mkdir MultiDirectory
unzip md.zip -d MultiDirectory
cd MultiDirectory
```

Или используйте git:

```shell
git clone https://github.com/MultifactorLab/MultiDirectory-CI.git
cd MultiDirecory-CI
```

2. Сгенерируйте конфигурационный .env файл при помощи:

Необходимо запустить файл:

* для Unix систем - ./setup.sh
* для Windows систем - ./setup.bat

Далее следуйте инструкциям. После создания .env файла сервисы готовы к развертыванию.

3. Запустите сервисы при помощи команды:

```shell
 docker compose pull; docker compose up -d
```

## Видео с установкой MultiDirectory

<iframe  src="https://www.youtube.com/embed/jHfTEi2q9vU" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>

## Обновление сервисов MultiDirectory

Для обновления сервисов MultiDirectory до актуальной версии, необходимо:

1. Остановить запущенные службы докера:

```shell
docker compose down; docker compose pull; docker compose up -d
```

2. Чтобы обновить конфигурационные файлы (docker-compose.yml и setup.*), пожалуйста, повторно загрузите репозиторий, используя следующие шаги:

```shell
curl -L https://github.com/MultifactorLab/MultiDirectory-CI/archive/refs/heads/main.zip -o md.zip
unzip md.zip -d MultiDirectory
```

Или используйте git:

```shell
git clone https://github.com/MultifactorLab/MultiDirectory-CI.git
```
