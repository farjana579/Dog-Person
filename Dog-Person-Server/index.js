const express = require("express");
const cors = require("cors"); // cross origin resource sharing
const mongodb = require("mongodb"); // mongo db
const { MongoClient } = mongodb; // to connect mongodb
const app = express(); // backend in a variable
//const cookieParser = require("cookie-parser");
// const sessions = require("express-session");
// const oneDay = 1000 * 60 * 60 * 24;
// var session;
// app.use(cookieParser());
// app.use(
//   sessions({
//     secret: "secret",
//     saveUninitialized: true,
//     cookie: { maxAge: oneDay },
//     resave: false,
//   })
// );
app.use(cors()); // using cors
require("dotenv").config(); // configuring dot env
app.use(express.json());
const port = 4000;

const url =
  "mongodb+srv://WEBTOON:NTDNTDNTD@cluster0.wxtmufn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ObjectId = mongodb.ObjectId;

async function server() {
  try {
    // connecting with mongodb
    await client.connect();
    // getting database
    const database = client.db("DogPerson");
    // getting the collections/ tables.
    const productCollection = database.collection("product");
    const reviewCollection = database.collection("review");
    const users = database.collection("users");
    const orderListCollection = database.collection("orderList");

    //crud

    app.get("/products/:id", async (req, res) => {
      const { id } = req.params;
      const filter = {
        _id: ObjectId(id),
      };
      const result = await productCollection.findOne(filter);
      res.json(result);
    });
    app.get("/products", async (req, res) => {
      const query = req.query;
      // const cursor = productCollection.find(query);
      //const result = await productCollection.find({}).toArray();
      const page = parseInt(req.query.page > 0 ? req.query.page : 0) - 1;
      // const perpage = parseInt(req.query.perpage);
      const perpage = 20;
      const type = req.query.type;
      const subtype = req.query.subtype;
      const pageNo = query.page;

      const filter = {
        type: type,
        subtype: subtype,
      };

      //subtype is empty
      const filter2 = {
        type: type,
      };
      if (type == "" && subtype == "") {
        const cursor = productCollection
          .find({})
          .skip((pageNo - 1) * perpage)
          .limit(perpage);
        const result = await cursor.toArray();
        res.json(result);
      } else if (subtype == "") {
        const cursor = productCollection
          .find(filter2)
          .skip((pageNo - 1) * perpage)
          .limit(perpage);
        const result = await cursor.toArray();
        res.json(result);
      } else {
        const cursor = productCollection
          .find(filter)
          .skip((pageNo - 1) * perpage)
          .limit(perpage);
        const result = await cursor.toArray();
        res.json(result);
      }

      // console.log(result);

    });


    app.get("/reviews/:id", async (req, res) => {
      const id = req.params.id;
      const filter = {
        productID: ObjectId(id),
      };

      const cursor = reviewCollection.find(filter);
      const result = await cursor.toArray();
      res.json(result);
    });
    app.get("/reviews", async (req, res) => {
      // const result = [
      //   {
      //     "_id": "63d1361a4517a159378d53ec",
      //     "productID": "63c8ec052e84587deb4dc68c",
      //     "title": "Lorem Ipsum",
      //     "rating": 3,
      //     "description": "63c8ec052e84587deb4dc68cn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.\n",
      //     "like": 2,
      //     "dislike": 1,
      //     "review_date": "2023-01-25T14:00:58.728Z",
      //     "reacts": []
      //   },
      //   {
      //     "_id": "63f4d5abe166ad56389d6199",
      //     "productID": "63c8ec052e84587deb4dc680",
      //     "title": "best ",
      //     "rating": 0,
      //     "description": "",
      //     "like": 0,
      //     "dislike": 0,
      //     "review_date": "2023-02-21T14:31:07.254Z",
      //     "reacts": []
      //   },
      //   {
      //     "_id": "63f4d1e50fd8eedca1df492b",
      //     "productID": "63c8ec052e84587deb4dc6c1",
      //     "title": "Good",
      //     "rating": 3,
      //     "description": "",
      //     "like": 0,
      //     "dislike": 0,
      //     "review_date": "2023-02-21T14:15:01.542Z",
      //     "reacts": []
      //   },
      //   {
      //     "_id": "647e13a09f1b2f097241c959",
      //     "productID": "63c8ec052e84587deb4dc6b1",
      //     "title": "very good products",
      //     "rating": 4,
      //     "description": "Nice food collections",
      //     "like": 1,
      //     "dislike": 0,
      //     "review_date": "2023-06-05T16:56:00.699Z",
      //     "reacts": []
      //   },
      //   {
      //     "_id": "647f36fbdecbede46dce9016",
      //     "productID": "63c8ec052e84587deb4dc6b6",
      //     "title": "Hello world",
      //     "rating": 5,
      //     "description": "Hello world",
      //     "like": 0,
      //     "dislike": 0,
      //     "review_date": "2023-06-06T13:39:07.657Z",
      //     "reacts": []
      //   },
      //   {
      //     "_id": "647f370bdecbede46dce9017",
      //     "productID": "63c8ec052e84587deb4dc6b6",
      //     "title": "HI ",
      //     "rating": 5,
      //     "description": "Know everyting",
      //     "like": 0,
      //     "dislike": 0,
      //     "review_date": "2023-06-06T13:39:23.703Z",
      //     "reacts": []
      //   },
      //   {
      //     "_id": "647f4a21f45304e0e94f5854",
      //     "productID": "63c8ec052e84587deb4dc6c0",
      //     "title": "Hello world",
      //     "rating": 4,
      //     "description": "YOur app is not working\n",
      //     "like": 3,
      //     "dislike": 0,
      //     "review_date": "2023-06-06T15:00:49.511Z",
      //     "reacts": []
      //   },
      //   {
      //     "_id": "647f526d5980c867fa104092",
      //     "productID": "63c8ec052e84587deb4dc6a9",
      //     "title": "Hello",
      //     "rating": 4,
      //     "description": "hdll",
      //     "like": 0,
      //     "dislike": 0,
      //     "review_date": "2023-06-06T15:36:13.191Z",
      //     "reacts": []
      //   }
      // ]
      const resi = await reviewCollection.deleteMany({})
      res.json(resi)
    })
    app.post("/reviews/:id", async (req, res) => {
      const id = req.params.id;
      const { rating, description, title, username } = req.body;
      const doc = {
        productID: ObjectId(id),
        title,
        rating,
        description,
        like: 0,
        username,
        dislike: 0,
        review_date: new Date(),
        react: {}
      };
      console.log(doc);
      const result = await reviewCollection.insertOne(doc);
      res.json(result);
    });
    app.put('/reviews/:id', async (req, res) => {
      const body = req.body;
      const id = req.params.id;
      const filter = {
        _id: ObjectId(id)
      }
      const result = await reviewCollection.updateOne(filter, {
        $set: {
          ...body
        }
      })
      res.json(result);
    })

    app.get("/login", async (req, res) => {
      const { email, password } = req.query;
      const filter = { email, password };
      const result = await users.findOne(filter);
      // req.session.isAuth = true;
      res.json(result ? result : false);
    });

    app.get("/users/:email", async (req, res) => {
      const { email } = req.params;
      const result = await users.findOne({ email: email });
      res.json(result === null ? false : true);
    });
    app.get("/users", async (req, res) => {
      const cursor = await users.find({}).toArray();
      console.log(cursor);
      res.json(cursor);
    });
    app.post("/users", async (req, res) => {
      const data = req.body;
      const result = await users.insertOne(data);
      res.json(result);
    });
    app.get("/order-details/:userid", async (req, res) => {
      const { userid } = req.params;
      const filter = {
        buyerID: userid,
      };
      const cursor = orderListCollection.find(filter);
      const result = await cursor.toArray();
      res.json(result);
    });
    app.delete("/order-details/:orderid", async (req, res) => {
      const { orderid } = req.params;
      const filt = {
        _id: ObjectId(orderid),
      };
      const result = await orderListCollection.deleteOne(filt);
      res.json(result);
    });
    app.post("/order-details", async (req, res) => {
      const productInfo = req.body;
      const result = await orderListCollection.insertOne(productInfo);
      res.json(result.insertedId);
    });
  } finally {
  }
}
server().catch(console.dir);

app.get("/", (req, res) => {
  res.json("Hello world");
});
app.listen(port, () => {
  console.log(port);
});
