import '../styling/Public.css'
export const Public = () => {
    return (
        <div className='publicMainDiv'>
            <div className='publicDiv'>
                <h1>Let's make things happen</h1>
                <p>Contact us today to learn more about how our digital  makerting services can help your business grow and  succeed online</p>
                <button className='getStrated'>Get started</button>
            </div>
            <div className='publicImgDiv'>
                <img src="public.png" alt="A public image" />
            </div>
        </div>
    )
}