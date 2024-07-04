import "./currentDate.css"

const CurrentDate = () => {

    const currentDate = new Date();

    const getMonthName = (monthIndex) => {
    const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    return months[monthIndex];
    };

    const formattedDate = `${currentDate.getDate()} de ${getMonthName(currentDate.getMonth())} ${currentDate.getFullYear()}`;

    return (
    <p className="current-date">{formattedDate}</p>
    );
};

export default CurrentDate;
