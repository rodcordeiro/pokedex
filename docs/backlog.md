# Pokedex — Feature backlog

Ideas for portfolio training (UI programming). Suggested order prioritizes learning impact.

## Suggested order

1. **Skeleton + empty states** — Loading placeholders and empty favorites / not found.
2. **Browse list + type filter** — Infinite scroll grid + type chips.
3. **Theme light / dark toggle** — Theme already exists in `styles/index.ts`.
4. **Weakness chart on detail** — Type effectiveness matrix in Pokemon sheet.
5. **Pokemon comparator** — Side-by-side stats for two Pokemon.

## UI / Interaction

| Feature | Notes |
| --- | --- |
| Type filter chips | Reuse TypeTag colors on Home / Browse |
| Infinite scroll browse | Paginated grid beyond single search |
| Skeleton loaders | Search, detail and favorites loading |
| Empty states | Empty favorites, offline, not found |
| Theme toggle | Light / dark using existing theme tokens |
| Compare screen | Two Pokemon, dual stat bars |

## Pokemon detail

| Feature | Notes |
| --- | --- |
| Sprite gallery | Artwork, shiny, gen variants in carousel |
| Moves / abilities | Cards with type, power, accuracy |
| Weakness / resistance | Visual type effectiveness chart |
| Pokemon cry | Play cry audio on detail screen |

## Product / Portfolio

| Feature | Notes |
| --- | --- |
| Onboarding | 3 slides: search, random, favorites |
| Share Pokemon card | Export / share sheet with artwork |
| Recent searches | Recently viewed Pokemon list |
| Favorites filter | Filter favorites by type / name |

## Technical

| Feature | Notes |
| --- | --- |
| Offline-first cache | Extend SQLite beyond favorites |
| Deep links | `pokedex://pokemon/25` |
| UI tests | Main screens + component tests |

## Design reference

Layouts live in [`design.pen`](./design.pen):

- **V2** — Calm · minimal · ND-friendly
- **V3** — Gamified · minimal (field-log HUD, collection progress, quiet quests)
