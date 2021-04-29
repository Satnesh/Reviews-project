const Data=[
    {
        id:1,
        name:'Satnesh Chauhan',
        job:'web Developer',
        image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhIREBAVFRAWFhUVFxYXEBYWGBgSFRYXFhgYGhcYHSggGholGxYXITEhJSkrLi4vFx8zODMtNygtLisBCgoKDg0OGQ8QGisfHR0tLS0tLSsrLS0rLSstLS0tKystListLS0rLSsrLS4tLSstLi0tLS0tLS0tLS4rLTcrLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECAwQGBwj/xAA/EAACAQIDBAcFBAkEAwAAAAAAAQIDEQQhMQUSQVEGImFxgZGhEzJCscEHFFLwI2JygpKiwtHhM7LS8RZDY//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EACIRAQEAAgEEAgMBAAAAAAAAAAABAhEDEiExYRNRBCIyQf/aAAwDAQACEQMRAD8A9qSKgqaZEVQKgAVBAAKhQFQRQAAAAAAAAAgemHSWns6g6slvTeUYXtfm32ICdlJLNuyNeW0KKaTrU05aL2kbvuV8z516VdMsZjJKUqrUMmoRe7BK7ay55Xvrlrkc/VrymrzzWrvnpxT/ADqZuS6fWYPL/sz6X1X7PCYmW/dunCo23JSWkZP4k1o9cn4eoFl2WaAAVAAAAAAAAAAAAAAAAAtLigGNFSiLishUAACoC6CpQqRQAAAAAAAAAADw77TMbUxeMq0YNuFF+zcc1aVotyXPX0PcTyPE4aMdoY9tdZ1E/CUU7+pjO6jfHj1ZaecVNmuCacJNLJpKzUWnnF6PddpL9p5ZGrh8FUi2t3ejeMkv3usl+rKLl6HrqwUZrNLI062Apxk2oo8LyV2T8ebcphthTjTTUnfqSVnZqUEkmmuNlY9F+yzpHXruthcTNzlTjGdObvd02913b1z3fNkDW6qNv7PGo7SkkveoT/3wbNceV2xz8ck3HqoAOhxgAAAAAAAAAAAAAAAAAAssAVRWQqLFSNKFQAAAAAAAAAAAAAAAeYbWlGri8RWjFrejR1tnlON/5Eennn208K4V60ZLLLd/YTf/ADPPk8Pfgk21KdaEVZ1IrvZhxDWrat3kRtXo17RqSm967eajazWStbRPMz7QwkVQVPNvRs57Hdja08RtOg7xjU3nplmjPsvEzw1WGJoqLn7OrB72nwyXjk0RmA6PwWqe9ZJy3nwd75aPuJOOCVZ06EdZVMnx6q+t7FnbwxZv+vD2SjK8U3xSfmi8thGyS5Kxcdb5oAAAAAAAAAAAAAAAAAAKWKgAAAAAAAAAAAAAAAAAAAAOT6dpU/u9bd/9nspO2kKkXr2b0Y+Z1hF9J9l/e8NVoJ2lJXi76Ti1KN+y6RMpuNY3V24uviLKyS7G9CB2ntGKjJWvJN260eSa7tRsjHKs5Ua73a1KbhKDavvJ7r780WbU2bGOlRJPnBXV+RyXb6eGe/DXwuMa+JNNc9Cd6BPf2gks1To1ZPvlKEV9fM5WvRhRW+5Zq9r2XDkkju/sd2XJYeeMqe9XsoLLKlBvPxbf8KNcU3Xj+Rn+unoYAOpwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY6leEdZJeIGQpJ210NCttSK91X9CH2lialRW3uryWX/ZL2i4zd04HprsGpOvPF4TOrvNuKst5X95dpymN6Q1YPcqKaktVJNPLsZ6u4ZEdtHDRqK0op+Bz3v5d8x14rzHCxrY2fWuqKvdvR34R5s9u6GbWoxo08O2oOCtG+UXG7yT5rkcRUwyhZWNnCYScrZNR4t8uS7xjbvszycePT+1esRknmndFTi8Hi6tJdWTS5aryZL4XbktJxT7svQ6NuFOg0aW1Kcua71/Y26dWMleLTXY7lF4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhxVbcjfiZiK2jVvK3L8sDXxGNk1x7rmnOrpbtMk+XPR9pp011muy/nZlRt8n2FkjJ9EWyKNecOw13Rj+F/nxN1q5jaM2StTPKeK0ZYdJ727G/PVmRI2JJFlhpLbfLC07lzlbxv5LUv3dWamJqWnFfqN+Urv0XqEi9123u3yV9OSdn4uV0uyLZJ7Hxns5pfC8ny7PIhMJTvKVnkrJy52Vl6Z985cjbvpb3eHb2gdyDBgKu/ThLml5rJmcKAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCYh3k+9k2QNTt/LLErRr5Xi8k/df4Za2+piw9TeUJ2s7uMlyldprwd/Iy4jO8ZcdPD6mjs2o96rRnbeT3k/wAUHZqfffeT7YvmUSxay65awLJGNl02WIiDLWXPuLWFUbIbbtRxlQkuPtoeLpTkr+MSWmyC6U1YxoxlJZRnG67JPcfpNkEphqXw/AtctZPP63fa+8y4ipu9/wAlxbL6crRy52Xa+PrcwywuTlLOTzfeB1XR+/sIZ3Wdu67/AMkiRfR6qnSUVrHXxba/PYSgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAACExFm5cm7k1IhpIsSo3Gxys81+dXwfJnLYvaHssVhlJ5SnuxfOM/0coP8AelTf7rOyrR4NXTPOftFw8oKlVhe0akJp8pxlFJeKev8A8kKR6HApJmvhcSpxjNZqST9C+bKKVGW3KV3p4CeTILrlkmJGKo9WQW1ZHLdL6qlS9m/iqUl4OrBfUm9oV9xakHsml95ruUv9Km756Opql4a/wmMrp6YYdTqvaq8cs95Rtb4pO711tq+xGzURGqdk6yTcM9z9ni/3nx5d7NnC1EoWlO8s22uDbbsr8FeyfYMcttcmExnZMbBxcYtwfvSatZck8mzoDjNlyca9Nxk2nJJpyurPLzzOzNvIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW1NH3MiJuxI4+bjTk0r2V7XtfsIGWKm0m4xjdKybbbyzysml3+NixKvnUTXV6y5pr6HBfaBUTo7ueckrLrP8WXanFPwZ1eMxNWzXst6HFwe4072yV3fzRzcsM6uKoQbk6e7Kdprrb11F8LZfV8zOd1G+PHd0s6B7V36XsqlOpGUXk5QaTT7zrd9aX9RDZyWkfUpUwnN2PP5b9Pb4Z9rMTJbuTzT5l86i31ZrQ0alBbz6/HmU+6J8SfL6X4PbelI1a1RWZa8CufqWfclzJeb0k4PaH285zVqa3nbgxsWg6WHjTlF78pOVTTj8KfZkr9hMRwyRfJRPLLO174YTFYqU6sUm4qLdpLP3E/d045J95vzrJPd4rk2vFc0alLRr9b5qwlnuu/Y+5/5Ojj/AJcvNbctfTFv/pISTy3lmtVn62fircT0E8rqSlGpdXzkozS03s/Z1VyvbdflwPVEbjyAAUAAAAAAAAAAAAAAAAAAAAAAAAAABixKvGWdsmcZXpyqVs5NRzc2st2jHSMXwbatz99/ha7eSvkQHsEt5PjLreGVvQsRpxWcbq3wpWyjFR3pWXlHuS7TJUqZX+J8eUmvohUzm3wS3V45yfyRjlZu7eSyXe82/l5AY8ZiN2EpJvqwcrXve13m3nwOI6R9I8Yl+hoKXdU180rep122KsFSkvxSjDvjez9FLzIacKb1scvNdWadv4/eXbhMH0xrwf6fBVe+E1L03V8zo9n9M8LPJ1JU3yqRcP5vd9SV+7UeSMVXZtCWTin4Hn1env0+0hQ2jGorwqJrvTXmZZynqc7/AOO4eL3oxcHq3BuLf8Njaaq04pwbfZKVsu9L53HlNJJ1JczFPFSRoT2m0ut9H6o16e1oTfVkvMnRb4LnJ5T2FxDau/xR+aL6laxk2FsariYb29BJTzu23vWi0slbS3mSr6J1Gv8AVhf9l/3OrDGyacPJZcrYiNkYOpWrU5QinuyTlfRRTUs+b6tl3nohH7H2VHDRai3KTtvN9nJcESBuPMABQAAAAAAAAAAAAAAAAAAAAAAAAAAA0tpUbreSzWvcABzOIrSbtCMpPlGLfyNLE+2j71OcVna8WvmAKIfble6pRel97+Vr+o0vbwXvSS75pfNgHPnN118WXTgpLa2HhrWp+E02YKnSfDx92Tk+yLfyAE44mXNWjiOlEn7lKT77RX1ZH1ts4qfFRXJL6u4BqYyPO8mV/wBa81OfvOUu9t+hJbOw1muQB64vHJ610ClejU7Z73mrf0nTgFqQAAUAAAAAAAAAAAAAf//Z',
        text:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'
    },

    {
        id:2,
        name:'Ritesh Chauhan',
        job:'Intern',
        image:'https://image.shutterstock.com/image-photo/portrait-happy-fashionable-handsome-man-260nw-600200732.jpg',
        text:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'
    },

    {
        id:3,
        name:'Veeru Masal',
        job:'Ios Developer',
        image:'https://image.shutterstock.com/image-photo/portrait-sexy-man-260nw-454005958.jpg',
        text:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'
    },

    {
        id:4,
        name:'Jasmine',
        job:'web Intern',
        image:'https://news.harvard.edu/wp-content/uploads/2020/06/Durba_Mitra-copy_2500-1200x800.jpg',
        text:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'
    },

    {
        id:5,
        name:'Sonam',
        job:'Python Developer',
        image:'https://www.imf.org/external/pubs/ft/fandd/2020/03/images/morsy-600.jpg',
        text:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'
    },
]   

export default Data;