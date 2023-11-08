
const Header = () => {
    return (
        <div className="hero h-[450px]" style={{ backgroundImage: 'url(https://i.ibb.co/TLLBxjJ/classic-book-with-detailed-cover.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold"><em><span className="text-cyan-400">Book</span> <span className="text-rose-500">Haven</span></em></h1>
                    <p className="mb-5 font-normal">Books are a valuable source of knowledge, entertainment, and insight, offering readers the opportunity to explore new worlds, gain perspective, and escape into the realms of imagination through the written word.</p>
                    <button className="btn font-semibold rounded-3xl bg-rose-500 hover:bg-cyan-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;