function P2B() {
    const personal = document.getElementById("personal");
    const business = document.getElementById("business");
    if (personal.style.display == "none") {
        console.log("p2b checked as business");
        personal.style.display = "inline-block";
        business.style.display = "none";
        console.log("p2b converted to personal");
        document.getElementById("switch_p2b").value = "For business?";
        console.log("button label fixed")
    } else {
        console.log("p2b checked as personal");
        personal.style.display = "none";
        business.style.display = "block";
        console.log("p2b converted to business");
        document.getElementById("switch_p2b").value = "For Personal?";
        console.log("button label fixed")
    }
}
