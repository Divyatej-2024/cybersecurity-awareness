# Cybersecurity Awareness Chromium QA

Playwright + Chromium is used to test the static awareness website's rendering and responsive layout at mobile, tablet, and desktop viewport sizes. It also captures uncaught JavaScript exceptions. It does not perform security scanning or contact external services.

Start a local static server with `python -m http.server 8080`, then run:

```bash
python -m pip install -r tests/browser/requirements.txt
python -m playwright install chromium
python -m pytest -q tests/browser
```

Set `AWARENESS_BASE_URL` to a different authorised local URL. These are UI smoke tests only.
