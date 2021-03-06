# Twitter clone with flask and react

Read my blog post about it [here](https://dev.to/arnu515/build-a-fullstack-twitter-clone-using-flask-and-react-1j72)

---

## How to use:

First, clone the repository with

```shell
git clone https://github.com/arnu515/twitter-clone.git
cd twitter-clone
```

Set up the backend:

```shell
cd backend
python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
```

Create the database:
```python
$ python3 # open the shell
import app
app.db.create_all()
```

Run the application
```shell script
python3 app.py
```

Set up the frontend in a new terminal window:

```shell
cd frontend
npm install
npm start
```
