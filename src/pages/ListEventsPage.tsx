import Header from "../components/Header.tsx";
import useFetch from "../hooks/useFetch.tsx";

const ListEventsPage = () => {

    const getEventsFromApi = () => {
        return [
            {
                title: 'event 1',
                date: '2020-05-01',
                content: 'Super event bmlavla',
            },
            {
                title: 'event 2',
                date: '2020-05-01',
                content: 'Super event bmlavla',
            },
            {
                title: 'event 3',
                date: '2020-05-01',
                content: 'Super event bmlavla',
            }
        ]
    }

    const events = getEventsFromApi();
    
    return (
        <>
            <Header />

            <section>
                <h2>Tous les évènements</h2>
                {events.map((event) => (
                    <article>
                        <h3>{event.title}</h3>
                        <i>{event.date}</i>
                        <p>{event.content}</p>
                    </article>
                ))}
            </section>
            </>
    )
}

export default ListEventsPage;