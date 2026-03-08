# Git & GitHub — Mis apuntes

> **Git** → Sistema de **control de versiones distribuido**. Cada desarrollador tiene su propia copia del proyecto.  
> **GitHub** → Plataforma en línea que utiliza Git para el alojamiento y gestión de repositorios.

---

## 1. Conceptos que hay que tener claros

- **Repositorio** — La carpeta de tu proyecto, pero "vigilada" por Git. Tiene una subcarpeta `.git` oculta donde se guarda todo el historial.
- **Commit** — Como hacer una foto a tu código en ese momento.
- **Branch (rama)** — Una línea de trabajo paralela. 
- **Merge** — Juntar los cambios de una rama con otra.
- **Staging area** — Una zona intermedia. Antes de hacer commit, decides qué archivos quieres incluir.
- **Remote** — El repositorio en la nube (GitHub, GitLab...). Tu copia está en local, la de todos está ahí arriba.
- **Clone** — Descargarte un repo que ya existe en GitHub a tu ordenador.
- **Pull Request** — Solicitud para que el equipo revise tus cambios antes de fusionarlos.

El flujo que vas a repetir siempre:

```
hacer cambios → git add → git commit → git push → (pull request si trabajas en equipo)
```

---

## 2. Comandos básicos (el día a día)

| Comando | ¿Qué hace? |
|---|---|
| `git init` | Convierte la carpeta actual en un repositorio de Git |
| `git clone <url>` | Te descargas un repo de GitHub a tu máquina |
| `git status` | Te dice qué has tocado, qué está en staging y qué no |
| `git add <archivo>` | Metes un archivo en el staging (lo preparas para commit) |
| `git add .` | Metes TODO lo que hayas modificado en el staging |
| `git commit -m "mensaje"` | Haces la "foto". El mensaje describe qué has cambiado |
| `git push` | Subes tus commits a GitHub |
| `git pull` | Te traes los cambios que haya en GitHub y los fusionas |

El flujo que más vas a repetir:

```bash
git add .
git commit -m "lo que sea"
git push
```

---

## 3. Ramas

| Comando | ¿Qué hace? |
|---|---|
| `git branch` | Lista las ramas que tienes en local |
| `git branch <nombre>` | Crea una rama nueva |
| `git checkout <rama>` | Te cambias a esa rama |
| `git checkout -b <rama>` | Crea la rama y te cambia a ella de una (el que más usarás) |
| `git merge <rama>` | Fusiona esa rama dentro de la que estás ahora |

> ⚠️ No cambies de rama con cambios sin guardar. Haz commit o usa stash antes.

La rama `main` (o `master` en repos antiguos) es la principal — ahí va el código estable.

---

## 4. Trabajar con remotos

| Comando | ¿Qué hace? |
|---|---|
| `git remote -v` | Te dice a qué repositorios remotos está conectado tu proyecto |
| `git remote add origin <url>` | Conecta tu repo local con uno de GitHub |
| `git push origin <rama>` | Sube una rama concreta a GitHub |
| `git pull origin <rama>` | Te trae una rama de GitHub y la fusiona |
| `git fetch origin` | Se descarga los cambios pero NO los fusiona |

¿Cuándo usar fetch en vez de pull? Cuando quieras ver qué han subido los demás antes de mezclar nada con tu código. Pull es fetch + merge automático.

---

## 5. Ver el historial

| Comando | ¿Qué hace? |
|---|---|
| `git log` | Historial completo de commits (autor, fecha, mensaje...) |
| `git log --oneline` | Lo mismo pero resumido, una línea por commit. Mucho más limpio |
| `git diff` | Te muestra qué has cambiado desde el último commit |
| `git diff rama1 rama2` | Compara las diferencias entre dos ramas |

---

## 6. Deshacer cosas (con cuidado)

| Comando | ¿Qué hace? |
|---|---|
| `git reset <archivo>` | Saca un archivo del staging. No pierdes nada, solo lo "despreparas" |
| `git reset --hard HEAD~1` | Borra el último commit y todos sus cambios. **No hay vuelta atrás** |
| `git revert <hash>` | Crea un commit nuevo que hace lo contrario al que le digas. Seguro |

La diferencia clave: `reset --hard` **destruye**, `revert` **deshace creando**. Si trabajas en equipo, usa siempre revert porque no reescribes el historial.

---

## 7. Stash — guardar cambios "en un cajón"

Situación típica: estás trabajando en algo a medias, te piden que cambies de rama para arreglar un bug urgente, pero no quieres hacer commit de algo sin terminar. Ahí entra stash.

| Comando | ¿Qué hace? |
|---|---|
| `git stash` | Guarda todos tus cambios en un "cajón temporal" y deja tu rama limpia |
| `git stash list` | Lista todos los stash que tienes guardados |
| `git stash apply` | Recupera el último stash pero lo deja en la lista (por si lo necesitas otra vez) |
| `git stash pop` | Recupera el último stash y lo borra de la lista |
| `git stash drop` | Elimina el último stash sin aplicarlo |

**Ejemplo real:**

```bash
# Estás trabajando en la rama "nueva-feature"
git stash                    # guardas los cambios temporalmente
git checkout main            # te cambias a main
# ... arreglas el bug, haces commit, push...
git checkout nueva-feature   # vuelves a tu rama
git stash pop                # recuperas tu trabajo y sigues donde lo dejaste
```

En resumen, es una forma de pausar tu trabajo sin necesidad de hacer commit.

---

## 8. Tags — marcar versiones

Los tags sirven para marcar puntos concretos del historial como versiones. Cuando tu proyecto llega a un estado estable y quieres dejarlo marcado como "v1.0" o "v2.3.1", usas un tag.

Piensa en ello como una etiqueta permanente sobre un commit concreto: "esta es la versión 1.0".

| Comando | ¿Qué hace? |
|---|---|
| `git tag` | Lista todos los tags que existen |
| `git tag v1.0.0` | Crea un tag ligero en el commit actual (solo el nombre) |
| `git tag -a v1.0.0 -m "Primera versión estable"` | Tag anotado: guarda quién lo creó, la fecha y un mensaje |
| `git push origin v1.0.0` | Sube un tag concreto a GitHub (los tags NO se suben con push normal) |
| `git push origin --tags` | Sube TODOS los tags a GitHub |
| `git tag -d v1.0.0` | Borra un tag en local |

> ⚠️ Los tags **no se suben solos** con `git push`. Tienes que hacer `git push origin --tags` o subirlos uno a uno.

**¿Ligero o anotado?** Para releases y versiones de producción, usa anotado (`-a`) porque guarda más información. Para marcas rápidas de uso personal, el ligero es suficiente.

**Ejemplo:**

```bash
git add .
git commit -m "versión 1.0 lista"
git tag -a v1.0.0 -m "Release 1.0 — login y registro funcionando"
git push origin main
git push origin v1.0.0
```

En GitHub, los tags aparecen en la sección "Releases" y puedes descargar el código de esa versión concreta.

---

## Resumen rápido 📋

- **Día a día:** `add .` → `commit -m` → `push`
- **Ramas:** `checkout -b nueva-rama` → trabajar → `merge`
- **Remotos:** `remote add` para conectar, `push/pull` para sincronizar, `fetch` para revisar sin fusionar
- **Historial:** `log --oneline` para ver qué se ha hecho, `diff` para ver qué has cambiado
- **Deshacer:** `reset` para sacar del staging, `revert` para deshacer un commit de forma segura
- **Stash:** Guardar trabajo a medias sin commit para cambiar de rama tranquilo
- **Tags:** Marcar versiones importantes del proyecto
