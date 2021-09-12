function addusers() {
    pl1n_name = document.getElementById("pl1n").value;
    pl2n_name = document.getElementById("pl2n").value;

    localStorage.setItem("pl1n",pl1n_name);
    localStorage.setItem("pl2n",pl2n_name);

    window.location="index.html";
};