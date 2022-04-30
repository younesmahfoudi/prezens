###     uniquement en dev       ###
import uvicorn

###     uniquement en dev       ###
if __name__ == "__main__":
    uvicorn.run("prez-app.main:app", port=8100, reload=True)