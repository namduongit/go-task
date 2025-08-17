package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/namduongit/go-task/config"
	"github.com/namduongit/go-task/models"
	"github.com/namduongit/go-task/routes"
)

func main() {
	config.LoadEnv()
	config.ConnectDB()
	config.DB.AutoMigrate(&models.User{})

	r := gin.Default()

	routes.RegisterRoutes(r)

	port := config.GetEnv("SERVER_PORT")

	addr := fmt.Sprintf(":%s", port)
	fmt.Println("Server is running on http://localhost" + addr)
	r.Run(addr)
}
