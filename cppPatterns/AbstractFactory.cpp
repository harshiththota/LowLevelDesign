#include <iostream>

using namespace std;

class Shape {
  public:
    Shape() {
      id_ = total_++;
    }
    virtual void draw() = 0;
  protected:
    int id_;
    static int total_;
};

int Shape::total_ = 0;

class Circle : public Shape {
  public:
    void draw() {
      cout << "circle " << id_ << ": draw" << endl;
    }
};
class Square : public Shape {
  public:
    void draw() {
      cout << "square " << id_ << ": draw" << endl;
    }
};
class Ellipse : public Shape {
  public:
    void draw() {
      cout << "ellipse " << id_ << ": draw" << endl;
    }
};
class Rectangle : public Shape {
  public:
    void draw() {
      cout << "rectangle " << id_ << ": draw" << endl;
    }
};

class Factory {
  public:
    virtual Shape* createCurvedInstance() = 0;
    virtual Shape* createStraightInstance() = 0;
};


class SimpleShapeFactory : public Factory {
  public:
    Shape* createCurvedInstance() {
      return new Circle;
    }
    Shape* createStraightInstance() {
      return new Square;
    }
};
class RobustShapeFactory : public Factory {
  public:
    Shape* createCurvedInstance()   {
      return new Ellipse;
    }
    Shape* createStraightInstance() {
      return new Rectangle;
    }
};

int main() {
  Factory* factory1 = new SimpleShapeFactory();
  Factory* factory2 = new RobustShapeFactory();
  Shape* shapes[4];

  shapes[0] = factory1->createCurvedInstance();   // shapes[0] = new Circle;
  shapes[1] = factory1->createStraightInstance(); // shapes[1] = new Square;
  shapes[2] = factory2->createCurvedInstance();   // shapes[2] = new Ellipse;
  shapes[3] = factory2->createStraightInstance();   // shapes[3] = new Rectangle;

  for (int i=0; i < 4; i++) {
    shapes[i]->draw();
  }
}
