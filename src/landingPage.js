import Container from 'react-bootstrap/Container';
function LandingPage() {
    return (
        <div class="bg-primary">
            {/* <Container> */}
                <div class="row ">
                <div class="col-md-6 col-sm-12 my-5">
                    <h1 class="text-warning more7">KICKSTART YOUR CAREER</h1>
                    <h5 class="mt-4 text-white">Pakistan's leading IT companies are ready to train you in the most in-demand skills to make your dream job a reality, completely free.</h5>
                    <h5 class="mt-4 text-white">Already a student? Log in to start learning!</h5>
                    <button class="text-right btn btn-warning mt-4">Trainee Login</button>
                </div>
                <div class="col-md-6 col-sm-12 my-5 more4">
                <img src="images/4.png" height={400} alt=""/>
                </div>
            </div>
            {/* </Container> */}
            

        </div>
    )
}
export default LandingPage;