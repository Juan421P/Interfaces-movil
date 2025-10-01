import { Interface } from './../../base/interface.js';
import { SubjectsDefinitionService } from './../../../js/services/subject-definitions.service.js';

export default class SubjectsInterface extends Interface {

    static getTemplate() {
        return `
            <main class="flex flex-col min-h-screen p-10 md:ml-80">
                <div class="flex items-center justify-between mb-10">
                    <h1 class="text-2xl font-bold bg-gradient-to-r from-[rgb(var(--text-from))] to-[rgb(var(--text-to))] bg-clip-text text-transparent drop-shadow select-none">
                        Materias
                    </h1>
                    <div class="block transition-shadow duration-300 bg-transparent group rounded-xl hover:bg-white hover:shadow-lg">
                        <button id="add-assignment-btn" type="button" class="flex items-center gap-5 px-5 py-4 text-indigo-400 transition-colors duration-300 rounded-lg group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-indigo-400 transition-colors duration-300 stroke-current group-hover:text-white drop-shadow fill-none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 12h8" />
                                <path d="M12 8v8" />
                            </svg>
                            <span class="hidden pr-1 font-medium transition-all duration-300 select-none lg:block group-hover:text-white drop-shadow">
                                Agregar materia
                            </span>
                        </button>
                    </div>
                </div>
                <section id="assignment-list" class="flex flex-wrap gap-6">
                </section>
            </main>
        `;
    }

    async init() {
        this.listContainer = document.getElementById("subjects-list");
        this.filterInput = document.getElementById("filter-subject");
        this.searchBtn = document.getElementById("search-subjects-btn");

        this.searchBtn.addEventListener("click", () => this.loadSubjects());
        this.filterInput.addEventListener("input", () => this.loadSubjects());

        await this.loadSubjects();
    }

    async loadSubjects() {
        this.listContainer.innerHTML = "";

        let subjects = await SubjectsDefinitionService.list();
        const filter = this.filterInput.value.toLowerCase();

        if (filter) {
            subjects = subjects.filter(s =>
                s.subjectName.toLowerCase().includes(filter) ||
                s.subjectCode.toLowerCase().includes(filter)
            );
        }

        const tmpl = document.getElementById("tmpl-subject-card");

        subjects.forEach(s => {
            const node = tmpl.content.cloneNode(true);
            node.getElementById("subject-name").textContent = s.subjectName;
            node.getElementById("subject-code").textContent = s.subjectCode;
            node.getElementById("subject-uv").textContent = `UV: ${s.valueUnits}`;
            this.listContainer.appendChild(node);
        });
    }
}
