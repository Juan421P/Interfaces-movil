import { AuthService } from './../../js/services/auth.service.js';
import { buildInitials, showImageModal } from './../../js/lib/common.js';
import { ROUTES } from './../../js/lib/routes.js';
import { THEMES } from './../../js/lib/themes.js';

const { Button } = await import(ROUTES.components.button.js);
const { Toast } = await import(ROUTES.components.toast.js);
const toast = new Toast();
await toast.init();

export async function init() {

    const user = (await AuthService.me()).user;
    if (!user) {
        console.error('[Profile] No session user :(');
        return;
    }

    const person = {
        firstName: user.firstName,
        lastName: user.lastName,
        contactEmail: user.email,
        role: user.roleID
    };

    renderAvatar(user, person);
    renderUserInfo(person, user, person.role);

    setInitialThemeMode();
    renderThemeSwatches();

    new Button({
        host: '#customization-btn-host',
        text: 'Continuar',
        buttonType: 2,
        showIcon: false,
        onClick: async () => {
            const selectedPalette = document.querySelector('input[name="selected-theme"]:checked')?.value;
            const mode = document.querySelector('input[name="theme-mode"]:checked')?.value || 'light';

            if (!selectedPalette) {
                toast.show('Por favor selecciona un tema 🫡');
                return;
            }

            const currentTheme = THEMES.getCurrent();

            if (selectedPalette === currentTheme.palette && mode === currentTheme.mode) {
                toast.show('Ese tema ya está seleccionado. ✨');
                return;
            }

            const applied = THEMES.setTheme(selectedPalette, mode, true);
            if (applied) {
                toast.show('Tema aplicado ✨');
            } else {
                toast.show('No se pudo aplicar el tema 😕');
            }
        }
    });

    document.querySelector('#profile-avatar-main')?.addEventListener('click', () => {
        const img = document.querySelector('#profile-avatar-main img');
        if (img?.src) {
            showImageModal(img.src);
        }
    });

    document.querySelector('#profile-avatar-main')?.addEventListener('click', () => {
        const img = document.querySelector('#profile-avatar-main img');
        if (img?.src) {
            showImageModal(img.src);
        }
    });
}

function setInitialThemeMode() {
    const currentTheme = THEMES.getCurrent();
    const radio = document.querySelector(`input[name="theme-mode"][value="${currentTheme.mode}"]`);
    if (radio) {
        radio.checked = true;
    }
}

function renderAvatar(user, person) {
    const host = document.querySelector('#profile-avatar-main');
    if (!host) return;

    host.innerHTML = '';
    const initials = (person.firstName?.[0] || '') + (person.lastName?.[0] || '');

    if (user.image) {
        const img = document.createElement('img');
        img.src = user.image;
        img.className = 'object-cover rounded-full hover:cursor-pointer';
        img.onerror = () => host.appendChild(buildInitials(initials));
        host.appendChild(img);
    } else {
        host.appendChild(buildInitials(initials));
    }
}

function renderUserInfo(person, user, role) {
    const nameEl = document.querySelector('#profile-name');
    const roleEl = document.querySelector('#profile-role');
    const emailEl = document.querySelector('#profile-email');

    if (nameEl) nameEl.textContent = `${person.firstName} ${person.lastName}`;
    if (roleEl) roleEl.textContent = role || 'Rol desconocido';
    if (emailEl) emailEl.textContent = person.contactEmail || user.email;
}

function renderThemeSwatches() {
    const container = document.getElementById('themes-list');
    if (!container) return;

    container.innerHTML = '';
    const current = THEMES.getCurrent();
    const modeRadios = document.querySelectorAll('input[name="theme-mode"]');

    function updateSelectionOutlines() {
        container.querySelectorAll('.swatch-item').forEach(item => {
            const input = item.querySelector('input[type="radio"]');
            const visual = item.querySelector('.swatch-visual');
            const paletteName = input.value;
            const palette = THEMES.palettes.find(p => p.name === paletteName);
            if (!palette) return;

            const outlineRgb = palette.light.textFrom;

            if (input.checked) {
                visual.style.boxShadow = `0 0 0 4px rgba(${outlineRgb}, 0.95)`;
                visual.style.transform = 'scale(1.06)';
            } else {
                visual.style.boxShadow = 'none';
                visual.style.transform = 'scale(1)';
            }
        });
    }

    THEMES.palettes.forEach(p => {
        const light = p.light;
        const label = document.createElement('label');
        label.className = 'inline-flex items-center justify-center mx-1 cursor-pointer swatch-item';
        label.setAttribute('title', p.name);

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'selected-theme';
        input.value = p.name;
        input.className = 'hidden';
        if (p.name === current.palette) {
            input.checked = true;
        }

        const visual = document.createElement('div');
        visual.className = 'w-10 h-10 transition-all duration-200 rounded-full swatch-visual';
        visual.style.background = `rgb(${light.placeholderFrom})`;
        visual.style.border = '2px solid transparent';
        visual.style.boxSizing = 'border-box';

        label.appendChild(input);
        label.appendChild(visual);
        container.appendChild(label);
    });

    updateSelectionOutlines();

    container.addEventListener('change', e => {
        if (e.target?.name === 'selected-theme') {
            updateSelectionOutlines();
        }
    });

    modeRadios.forEach(r => {
        r.addEventListener('change', () => updateSelectionOutlines());
    });
}