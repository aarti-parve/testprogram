function get_data() {
    fetch("http://universities.hipolabs.com/search?country%3D%257Bcountry_name%257D&sa=D&source=editors&ust=1642932376752972&usg=AOvVaw0XsyfcckWpW5DoiGe5cU_5").then((r) => {
        // console.log(s);
        return r.json()
    }).then((data) => {
        console.log(data)
    })
}