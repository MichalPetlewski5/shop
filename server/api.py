from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ['http://localhost:5173'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

class Product(BaseModel):
    name: str
    description: str | None = None
    price: float

products = [
    Product(name='product1', description='desc1', price=12.0),
    Product(name='product2', description='desc2', price=13.0)
]


@app.get('/')
async def home():
    return {'message': 'hello world'}


@app.get('/products')
async def read_products():
    return products


if __name__ == '__main__':
    uvicorn.run(app)