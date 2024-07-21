export default function Root() {
    return (
        <>
            <div id="sidebar">
                <nav>
                    <ul>
                        <li>
                            <a href={`/projects`}>Projects</a>
                        </li>
                        <li>
                            <a href={`/about`}>About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}