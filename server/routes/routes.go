package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/namduongit/go-task/controllers"
	"github.com/namduongit/go-task/middleware"
)

func RegisterRoutes(r *gin.Engine) {
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Hello from Go server"})
	})

	// Auth
	r.POST("/auth/login", controllers.Login)
	r.POST("/auth/register", controllers.Register)

	// Task (yêu cầu JWT)
	task := r.Group("/tasks")
	task.Use(middleware.AuthMiddleWare())
	{
		task.POST("/", controllers.CreateTask)
		task.GET("/", controllers.GetTasks)
		task.PUT("/:id", controllers.UpdateTask)
		task.DELETE("/:id", controllers.DeleteTask)
	}

}
