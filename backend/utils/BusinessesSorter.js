module.exports = class Sorter {

    oldest(data) {
        var result = [];
        data.forEach(element => {
            result.push({
                business_name: element.business_name,
                location_start_date: this.formatDate(element.location_start_date)
            })
        });
        return result;
    }

    mostLocations(data) {
        var only_business_names = [];
        var result = [];
        data.forEach(element => {
            only_business_names.push(element.business_name);
        });
        [... new Set(only_business_names)].forEach(uniqueBN => {
            result.push({
                business_name: uniqueBN,
                unit_length: only_business_names.filter(BN => BN == uniqueBN).length
            })
        });
        return result;
    }

    formatDate(date) {
        try {
            if (date != undefined) {
                const d = new Date(date);
                const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
                const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
                return (`${ye}-${mo}-${da}`);
            }
        } catch (error) {
            console.log(error)
        }
    }

}