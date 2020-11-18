FROM python:3.6.7

WORKDIR /usr/src/app

COPY requirements.txt .

RUN apt-get update -y

RUN apt install libgl1-mesa-glx -y

RUN apt-get install 'ffmpeg'\
    'libsm6'\
    'libxext6'  -y

RUN apt-get install python3-h5py -y

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

COPY . .

CMD ["python", "app.py"]