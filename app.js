const express=require('express');
const app=express();
const morgan=require('morgan');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-Width, Content-Type, Accept, Authorization');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

const productRoutes=require('./api/routes/products');
const orderRoutes=require('./api/routes/orders');
const userRoutes = require('./api/routes/user')

mongoose.connect('mongodb+srv://shivani:api_project@cluster0-8mcn0.mongodb.net/test?retryWrites=true&w=majority',{
    // useMongoClient: true
    useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true
}).then(()=>{
	console.log("Connected to db");
}).catch(err=>{
	console.log("error:", err.message);
});
mongoose.Promise=global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Headers','Origin',"X-Requested-With,Content-Type,Accept,Authorization")
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT','POST','PATCH','GET','DELETE');
        return res.status(200).json({});
    }
    next();
})

app.use((error, req, res, next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message: error.message
        }
    })
})

module.exports=app;
