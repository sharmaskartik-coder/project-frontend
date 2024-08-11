class Feeds {
    constructor() {
        this.feeds = [
            { pid: 1, likes: 100, pname: "Devkaran", image: '/images/one.jpg', status: "Finished", location: "Pashan-pune", liked: false },
            { pid: 2, likes: 342, pname: "Saurav", image: "/images/twoo.jpg", status: "In Progress", location: "Hinjwadi-pune" , liked: true},
            { pid: 3, likes: 345, pname: "Himanshu", image: "/images/three.jpg", status: "Not Started", location: "Baner-pune", liked: false },
            { pid: 4, likes: 11, pname: "Devkaran", image: '/images/one.jpg', status: "Not Started", location: "Pashan-pune",liked: true },
            { pid: 5, likes: 245, pname: "Saurav", image: "/images/twoo.jpg", status: "In Progress", location: "Pashan-pune",liked: false },
            { pid: 6, likes: 3, pname: "Himanshu", image: "/images/three.jpg", status: "In Progress", location: "Pashan-pune",liked: true },
            { pid: 7, likes: 1, pname: "Devkaran", image: '/images/one.jpg', status: "Finished", location: "Pashan-pune",liked: false  },
            { pid: 8, likes: 2, pname: "Saurav", image: "/images/twoo.jpg", status: "Not Started", location: "Pashan-pune",liked: false  },
            { pid: 9, likes: 3, pname: "Himanshu", image: "/images/three.jpg", status: "Finished", location: "Pashan-pune" ,liked: false },
            { pid: 10, likes: 1, pname: "Devkaran", image: '/images/one.jpg', status: "Not Started", location: "Pashan-pune",liked: false  },
            { pid: 11, likes: 2, pname: "Saurav", image: "/images/twoo.jpg", status: "Finished", location: "Pashan-pune",liked: true },
            { pid: 12, likes: 3, pname: "Himanshu", image: "/images/three.jpg", status: "In Progress", location: "Pashan-pune",liked: true }
        ];
    }

    getAllFeeds() {
        return this.feeds;
    }

    updateIncreaseLikes(pid) {
        const feed = this.feeds.find(feed => feed.pid === pid);
        if (feed) {
            feed.likes += 1; // Increase the likes by 1
        }
    }
    updateDecreaseLikes(pid) {
        const feed = this.feeds.find(feed => feed.pid === pid);
        if (feed) {
            feed.likes -= 1; // Increase the likes by 1
        }
    }
}

export default Feeds;
