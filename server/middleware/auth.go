package middleware

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/golang-jwt/jwt/v5"
	"github.com/namduongit/go-task/config"

	"github.com/gin-gonic/gin"
)

func AuthMiddleWare() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		authHeader := ctx.GetHeader("Authorization")
		if authHeader == "" {
			ctx.JSON(http.StatusUnauthorized, gin.H{
				"status":  false,
				"message": "Error Authorization",
			})
			ctx.Abort()
			return
		}

		tokenString := strings.TrimPrefix(authHeader, "Bearer ")
		if tokenString == authHeader {
			ctx.JSON(http.StatusUnauthorized, gin.H{
				"status":  false,
				"message": "Error Authorization",
			})
			ctx.Abort()
			return
		}

		secretKey := []byte(config.GetEnv("JWT_SECRET"))

		token, err := jwt.Parse(tokenString, func(t *jwt.Token) (interface{}, error) {
			return secretKey, nil
		}, jwt.WithValidMethods([]string{"HS256"}), jwt.WithLeeway(0))

		/*
			- Giải mã token
			- Trả về token và lỗi
			- Kiểm tra claim exp do lúc nảy đăng ký, nếu hết hạn thì lỗi sẽ khác nil/null
		*/

		if err != nil {
			ctx.JSON(http.StatusUnauthorized, gin.H{
				"status":  false,
				"message": "Invalid or expired token",
			})
			ctx.Abort()
			return
		}

		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
			fmt.Println("Claims:", claims)
			// Lưu user_id vào context để controller dùng
			ctx.Set("user_id", uint(claims["user_id"].(float64)))
			ctx.Next()
		} else {
			ctx.JSON(http.StatusUnauthorized, gin.H{
				"status":  false,
				"message": "Invalid or expired token",
			})
			ctx.Abort()
			return
		}
	}
}
