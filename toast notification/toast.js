const notifications = document.querySelector(".notifications");
const buttons = document.querySelectorAll(".btn");

const toastDetails = {
    timer:6500,
    success: {
        icon:'icons8-done-16.png',
        text:'Success: This is a success toast.',
        altid:`tickl`
    },
    error: {
        icon:'icons8-multiply-16.png',
        text:'This is an error toast.',
        altid:`errorl`
    },
    warning: {
        icon:'icons8-warning-20.png',
        text:'Warning: This is a warning toast.',
        altid:`warningl`
    },
    info: {
        icon:'icons8-information-16.png',
        text:'Info: This is an information toast.',
        altid:`infol`
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 500)
}

const createToast = (id) => {
    const {icon,text,altid} =toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;

    toast.innerHTML = `<div class="column">
                            <img src="${icon}" alt="tick" id="${altid}">
                            <span>${text}</span>
                        </div>
                        <img src="icons8-multiply-16.1.png" alt="into" id="into" onclick="removeToast(this.parentElement)">`;
    notifications.appendChild(toast);

    setTimeout(() => removeToast(toast), toastDetails.timer);
        
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});