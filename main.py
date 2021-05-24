# Created By Kar1m
from flask import *
import matplotlib.pyplot as plt
import random
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/', methods=['POST', 'GET'])
def create():
    vals = []
    texts = []
    for i in request.form:
        if str(i).endswith("-val"):
            vals.append(int(request.form[i].replace("-val", "")))
            pass
        else:
            texts.append(str(request.form[i]))
            pass
    plt.pie(vals, labels=texts)
    r = random.randint(0, 10)
    plt.savefig(f'static/images/image-{r}.png')
    return render_template("index.html", created=True, img=f'/static/images/image-{r}.png')


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)
    # app.run(host='0.0.0.0', port=8000, debug=True)