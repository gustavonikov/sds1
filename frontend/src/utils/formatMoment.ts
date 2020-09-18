import moment from 'moment';

function formatMoment(date: string) {
    return moment(date).format('DD/MM/YYYY HH:mm');
}

export default formatMoment;
