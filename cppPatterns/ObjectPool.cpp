#include<iostream>
#include<string>
#include<list>

using namespace std;

class Resource
{
	int value;

	public:
		Resource()
		{
			value = 0;
		}

		void reset()
		{
			value = 0;
		}

		int getValue()
		{
			return value;
		}

		void setValue(int number)
		{
			value = number;
		}
};

// Signleton class

class ObjectPool
{
	private:
		list<Resource*> resources;

		static ObjectPool* instance;
		ObjectPool() {}

	public:
		static ObjectPool* getInstance()
		{
			if (instance == 0)
			{
				instance = new ObjectPool();
			}

			return instance;
		}

		Resource* getResource()
		{
			if (resources.empty())
			{
				cout<<"Creating new Resource"<<endl;
				return new Resource();
			}
			else
			{
				cout<<"Reusing existing resource"<<endl;

				Resource* resource = resources.front();
				resources.pop_front();

				return resource;
			}
		}

		void returnResource(Resource* object)
		{
			object->reset();
			resources.push_back(object);
		}
};


ObjectPool* ObjectPool::instance = 0;

int main()
{
	ObjectPool* pool = ObjectPool::getInstance();

	Resource* one;
	Resource* two;

	one = pool->getResource();
	one->setValue(10);

	cout<<"one = "<<one->getValue()<<endl;

	two = pool->getResource();
	two->setValue(20);

	cout<<"two = "<<two->getValue()<<endl;

	one = pool->getResource();

	cout<<"one = "<<one->getValue()<<endl;

	two = pool->getResource();

	cout<<"two = "<<two->getValue()<<endl;	

	return 0;
}



























