import { Link, Route, Routes, useParams } from 'react-router-dom'

function Routing() {


    return (
        <>

            <div>
                <h2>
                    Routes
                </h2>

                <nav>
                    <ul>
                        <li>
                            <Link to='/home'>Home</Link>

                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/home' element={<Home></Home>}></Route>
                    <Route path='/about/*' element={<About></About>}></Route>
                    {/* adding /* means we can go deep into childs for finding further routes 
                    it applies that after about anything else can also come  */}
                    <Route path='/*' element={<PageNotFound></PageNotFound>}></Route>
                    <Route path='user/:id' element={<User></User>}></Route>
                </Routes>
            </div>
        </>
    )
}
function User(prop){
    const {id}=useParams();
    
    console.log(id);
    return(
        <h2>
            User{id}
        </h2>
    );
}


function PageNotFound(){
    return(
        <div>
            <h3>
                Error 200
            </h3>
        </div>
    )
}

function Home() {
    return (
        <div>
            <h2>
                Inside Home
            </h2>
        </div>
    )
}

function About() {
    return (
        <div>
            <h2>
                Inside About
            </h2>
            <ul>
                <li>
                    <Link to='/about/founder'> Found</Link>
                </li>
            </ul>

            <Routes>
                <Route path='/founder' element={<Founder />}></Route>
            </Routes>
        </div>
    )
}

function Founder(){
    return (
    <div>
        <h1>
            Founder
        </h1>
    </div>
    )
}

export default Routing;