import "./index.css";
const ProfilePage = () =>{
    return(
        <>
            <div className="profile">
                <div className="setting">
                    <h2>Account Setting</h2>
                </div>
                <div className="proCon">
                    <div className="proBox">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfeO52olh7y7C0q00TYK22OfojrZuzcCL7-A&s" alt="profile img" />
                        <div className="nameEmail">
                            <h5>Marry Doe</h5>
                            <p>marray@gmail.com</p>
                        </div>
                    </div>
                    <div className="para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum optio ullam iusto rem dolor voluptatum dolores aspernatur labore illum earum iste modi, repudiandae voluptatem. Dignissimos rerum blanditiis distinctio laboriosam?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;