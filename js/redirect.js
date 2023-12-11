if ( localStorage.getItem('IndexedDB') !== null ){
    if ( document.URL.includes("index.html") ) {
        window.location.href = 'list.html';
    }
}
else {
    if ( document.URL.includes("list.html") ) {
        window.location.href = 'index.html';
    }

}
